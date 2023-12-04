
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
All_words <- read_excel("All_words.xlsx")
Corpus <- read_excel("Tur.Freq.3.Hun.xlsx")

# Convert the column to a list
All_list <- as.list(df1$Word)
Corpus_list <- as.list(Corpus$Word)

# Get Old20s'
old20<- old20(All_list,Corpus_list)

# Matched lists with original data frames
Matched_old <- data.frame(Word = names(old20), old20_new = unname(old20))
All_words <- df1 %>% left_join(Matched_old,by = "Word")

# Save is as excel
writexl::write_xlsx(df1,"All_words_n.xlsx")
