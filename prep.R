

preproc <- function(data_dir = "new/data/"){
  library(readr)
  library(stringr)
  library(tidyverse)
  get_files<- function(dir= "", file_ext= ".csv"){
    
    if(dir== ""){
      dir= getwd()
    }
    
    # get a list of all file in dir:
    all_files<- list.files(dir)
    # remove non-asc files (if present)
    all_files<- all_files[grepl(file_ext, all_files)]
    
    # sort files by number in string
    get_num<- function(string){as.numeric(unlist(gsub("[^0-9]", "", unlist(string)), ""))}
    num<- get_num(all_files) #change
    
    if(!is.na(num[1])){
      all_files<- all_files[order(num, all_files)]
    }
    # convert to directory string for each data file:
    if(length(all_files)>0){
      all_dirs<- NULL
      for(i in 1:length(all_files)){
        all_dirs[i]<- paste(dir, "/", all_files[i], sep = "")
      }
      
      message(paste("Found", toString(length(all_files)), file_ext, "files in the specified directory!", "\n"))
      return(all_dirs)
    }else{
      stop(paste("Found no", file_ext, "files in the specified directory!"))
    }
  } # end of get_files()
  data = NULL
  dataALL<- get_files(data_dir)
  for(i in 1:length(dataALL)){
    data1 <- read_csv(dataALL[i])
    colnames(data1)[13]<- "email"
    data1 <- data1 %>% select(email,participant,key_respTest.keys,key_respTest.corr,key_respTest.rt,item_nr,
                              target,BlogFreqPm,WordLength,isHarmonic,Zipf,old20,CorrAns)
    data1 <- data1[complete.cases(data1[, "target"]), ]
    data <- rbind(data1, data)
  }# end of subj
  return(data)
} # end fun


VH <- preproc(data_dir = "new_2/data/")

VH$word_cond <- ifelse(is.na(VH$BlogFreqPm),"nw","word")
#write_csv(VH, "new_data_VH_2_with3_new.csv")

pp<-VH %>% group_by(email,participant,word_cond,isHarmonic) %>% summarise(meanrt = mean(key_respTest.rt,na.rm =T),
                                               meanacc = mean(key_respTest.corr,na.rm = T)) 


# remove şeyma

VH <- VH %>% filter(!participant == 307430)
VH %>% group_by(word_cond,isHarmonic) %>% summarise(meanrt = mean(key_respTest.rt,na.rm =T),
                                                                          meanacc = mean(key_respTest.corr,na.rm = T)) 


VH$tr=1000*VH$key_respTest.rt
11644 -11032
VHtr=subset(VH, key_respTest.corr==1)
VHtr1=subset(VH, tr > 250)

tapply(VHtr$tr,list(VHtr$word_cond, VHtr$isHarmonic),sd)
##      harmonic notharmonic
## nw   671.5774    667.2193
## word 586.9242          NA
tapply(VH$key_respTest.corr,list(VH$word_cond, VH$isHarmonic),sd)
