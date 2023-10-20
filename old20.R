
library(devtools)
install_github("cran/vwr")

library(tidyverse)
library(readxl)
library(vwr)
data(basque.words)
head(basque.words)
ald(basque.words[1:10],basque.words,20)
old20(basque.words[1:10],basque.words)

All_words <- read_excel("matched_research.xlsx")
Corpus <- read_excel("Tur.Freq.3.Hun.xlsx")

# Convert the column to a list
All_list_A1 <- as.list(All_words$A1)
All_list_A2 <- as.list(All_words$A2)
Corpus_list <- as.list(Corpus$Word)

old20_A1<- old20(All_list_A1,Corpus_list)

old20_A2<- old20(All_list_A2,Corpus_list)

Matched_old_A1 <- data.frame(A1 = names(old20_A1), old20_A1 = unname(old20_A1))
Matched_old_A2 <- data.frame(A2 = names(old20_A2), old20_A2 = unname(old20_A2))

All_words <- All_words %>% left_join(Matched_old_A1,by = "A1") %>% left_join(Matched_old_A2,by = "A2")

writexl::write_xlsx(All_words,"All_matched_old20.xlsx")
