
# load/ install required packages:
packages= c("tidyverse", "readr", "stringr", "DstarM", "rtdists") 

for(i in 1:length(packages)){
  
  if(packages[i] %in% rownames(installed.packages())==FALSE){
    install.packages(packages[i])
    library(packages[i], character.only=TRUE)
  }else{
    library(packages[i], character.only=TRUE)
  }
}

# Load the data
VH = read.csv("~/Desktop/VowelHarmony/new_1/new_data_VH_36.csv", sep=";", header=T)
dat.all <- VH %>% dplyr::select(participant,item_nr,key_respTest.keys,key_respTest.rt,word_cond,isHarmonic,key_respTest.corr)
colnames(dat.all) <- c("subj","item","response","rt","word_cond","harm_cond","accuracy")

# For nonword targets (lexicality: NW), "1" implies the "z" key, and "0" implies 
# the "m" key

for(i in 1:nrow(dat.all)){
  if(dat.all$word_cond[i] == "word" & dat.all$accuracy[i] == 1){
    dat.all$response[i] <- "m"
  }else{
    if(dat.all$word_cond[i] == "word" & dat.all$accuracy[i] == 0){
      dat.all$response[i] <- "z"
    }else{
      if(dat.all$word_cond[i] == "nw" & dat.all$accuracy[i] == 1){
        dat.all$response[i] <- "z"
      }else{
        if(dat.all$word_cond[i] == "nw" & dat.all$accuracy[i] == 0){
          dat.all$response[i] <- "m"
        }
      }
    }
  }
}#end for

# Extract all conditions
response <- dat.all$response      # extract response
condition1 <- dat.all$word_cond        # extract lexicality
rt <- dat.all$rt                       # extract rt
item <- dat.all$item
pp <- dat.all$subject              # extract pp ids   
condition2 <- dat.all$harm_cond    # extract harmony
condition <- paste(condition2,condition1,sep = "_")   # all conditions

levels(as.factor(dat.all_ddm$condition))

# Create data frame
dat.all_ddm <- data.frame(response = response, condition = condition,
                           rt = rt, subj_idx = paste("s", pp, sep = ""),item = item,stim = condition1)




### Traditional Analysis ####

# Set sequential values (timegrid)
tt <- seq(0, 2, .01)

# Restriction matrix
# 0:4, 5, 27 for dm analysis
levels(as.factor(dat.all_ddm$condition))

dat.all_ddm$response <- ifelse(dat.all_ddm$response == "z","lower","upper")
#### Fixed ####
restr.fixed <- matrix(0:6, 7, 4)

# Estimate decision distribution
resT_fixed <- estDstarM(dat = dat.all_ddm, tt = tt, restr = restr.fixed,
                  DstarM = F, Optim = list(parallelType = 1))

#save(resT_fixed, file= "resT_fixed.RData")

#### Free drift rate v / Ter ####
restr.free.drift_ter <- matrix(0:6, 7, 4)
restr.free.drift_ter[2,(2:4)] <- c(7:9)
restr.free.drift_ter[3,(2:4)] <- c(10:12)

# Estimate decision distribution

resT_free.drift_ter <- estDstarM(dat = dat.all_ddm, tt = tt, restr = restr.free.drift_ter,
                        DstarM = F, Optim = list(parallelType = 1))

save(resT_free.drift_ter, file= "resT_free.drift_ter.RData")


