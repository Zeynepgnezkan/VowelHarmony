

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


all_data <- preproc(data_dir = "new_2/data/")

all_data$word_cond <- ifelse(is.na(all_data$BlogFreqPm),"nw","word")

write_csv(all_data, "new_data_VH_2_with3_new.csv")

pp<-all_data %>% group_by(participant,word_cond,isHarmonic) %>% summarise(meanrt = mean(key_respTest.rt,na.rm =T),
                                                                      meanacc = mean(key_respTest.corr,na.rm = T)) 
library(lme4)
all_data$participant <- as.numeric(as.character(all_data$participant))
all_data <- all_data %>%
  mutate(subj = dense_rank(participant))

all_data$isHarmonic <- factor(all_data$isHarmonic)
all_data$word_cond <- factor(all_data$word_cond)

all_data <- as.data.frame(all_data)
mm <- lmer(key_respTest.rt ~ word_cond * isHarmonic, data = all_data)
summary(mm)




