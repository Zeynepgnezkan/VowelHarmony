# Analysis
library(readr)
vh.preproc <- function(data_dir = "Analysis/data"){
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
  for(i in 1:length(dataALL)){#each subj
    data1 <- read_csv(dataALL[i])
    data1 <- data1[ , -which(names(data1) %in% c("Welcome_screen.started","Welcome_screen.stopped","key_respwelcome.keys",
                                                  "key_respwelcome.rt","key_respwelcome.duration","intro_x.thisRepN",
                                                  "intro_x.thisTrialN","intro_x.thisN","intro_x.thisIndex","target_p",
                                                  "isHarmonic_p","target_cond_p",
                                                  "CorrAns_p","key_respınstraction.duration","Pause.started" ,
                                                  "intro_x.ran","Introduction","Instraction.started","Instraction.stopped",
                                                  "session","date","expName","key_respınstraction.keys","key_resp_xx.keys" ,
                                                  "psychopyVersion","OS","frameRate","key_respınstraction.rt",            
                                                  "Fixation.started","Fixation.stopped","Studypractice.started" ,      
                                                  "Studypractice.stopped","key_respstudy.keys","key_respstudy.corr",         
                                                  "key_respstudy.rt","key_respstudy.duration","item_nr_p",
                                                  "Feedback.started","Feedback.stopped","test_loop.thisRepN",
                                                  "test_loop.thisTrialN","test_loop.thisN",
                                                  "test_loop.thisIndex","test_loop.ran","Goodbye_screen.started",
                                                  "Goodbye_screen.stopped","key_respgoodbye.keys",
                                                  "key_respgoodbye.rt","key_respgoodbye.duration",
                                                  "practice_loop.thisRepN","practice_loop.thisTrialN","practice_loop.thisN",         
                                                  "practice_loop.thisIndex","practice_loop.ran","TestTrial.started","TestTrial.stopped",
                                                  "key_resp_xx.rt","key_resp_xx.duration","rt","corr","Pause.stopped","key_respTest.duration"))]
    
    data1 <- subset(data1, !item_nr == "")
    data1$participant <- i
    data<- rbind(data1, data)
    
    
    } # end of subj
  return(data)
} # end of f



test_data <- vh.preproc(data_dir = "Analysis/data")
library(tidyverse)
x <- test_data %>% group_by(isHarmonic_A1,target_cond) %>% summarise(meanrt = mean(key_respTest.rt, na.rm = T ),
                                                                     meanacc = mean(key_respTest.corr, na.rm =T))

