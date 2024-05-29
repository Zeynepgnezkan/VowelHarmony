
#install vwr
# library(devtools)
# install_github("cran/vwr")

library(tidyverse)
library(readxl)
library(vwr)

# data(basque.words)
# head(basque.words)
# ald(basque.words[1:10],basque.words,20)
# old20(basque.words[1:10],basque.words)

# Get the corpus and words
All_words <- read_excel("pseudo.xlsx")
Corpus <- read_excel("Tur.Freq.3.Hun.xlsx")

# Convert the column to a list
All_list <- as.list(All_words$Pseudo)
Corpus_list <- as.list(Corpus$Word)

# Get Old20s'
old20<- old20(All_list,Corpus_list)

# Matched lists with original data frames
Matched_old <- data.frame(Pseudo = names(old20), old20_new_p = unname(old20))
All_words <- All_words %>% left_join(Matched_old,by = "Pseudo")

All_words %>% group_by(Harmon_cond) %>% summarise(mean_old = mean(old20_new_p))
# Save is as excel
writexl::write_xlsx(All_words,"pseudo_new_20.xlsx")
