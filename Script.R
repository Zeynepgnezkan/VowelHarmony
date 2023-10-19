
## Matching and selecting target words
# Required packages
library(readxl)
library(dplyr)
library(LexOPS)
library(openai)
library(progressr)
library(tidyverse)
library(openxlsx)

All_words <- read_excel("Tur.Freq.3.Hun.xlsx")

colnames(All_words)

All_words <- All_words[, !colnames(All_words) %in% c("NewsCDPc.")]

All_words$WordLength <- str_count(All_words$Word)

All_words <- All_words %>% filter(WordLength <= 6) %>% filter(WordLength >= 4)

df1 <- All_words %>%
  filter(str_count(Word, "[aeiıouöüAEIOUÖÜİ]") != 1) %>%
  mutate(harmonic = grepl("a|o|ı|u", Word, ignore.case = TRUE) & !grepl("e|i|ö|ü", Word, ignore.case = TRUE) | 
           grepl("e|i|ö|ü", Word, ignore.case = TRUE) & !grepl("a|ı|o|u", Word, ignore.case = TRUE),
         notharmonic = grepl("a|o|ı|u", Word, ignore.case = TRUE) & grepl("e|i|ö|ü", Word, ignore.case = TRUE) | 
           grepl("e|i|ö|ü", Word, ignore.case = TRUE) & grepl("a|ı|o|u", Word, ignore.case = TRUE)) %>%
  mutate(harmonic = ifelse(harmonic, "harmonic",NA),
         notharmonic = ifelse(notharmonic,"notharmonic",NA)) %>%
  mutate(isHarmonic = coalesce(harmonic, notharmonic)) %>%
  select(-notharmonic,-harmonic) %>%
  filter(!is.na(isHarmonic))

colnames(df1) <- c("A1", "BlogFreq","BlogFreqpm", "BlogCD","BlogCDPc","WordLength","isHarmonic") 
matched<- inner_join(stim2, df1, by="A1",na_matches = "na")

colnames(matched) <- c("item_nr","A1","A2","BlogFreq_A1","BlogFreqpm_A1","BlogCD_A1", "BlogCDPc_A1","WordLength_A1","isHarmonic_A1") 
colnames(df1) <- c("A2", "BlogFreq","BlogFreqpm", "BlogCD","BlogCDPc","WordLength","isHarmonic") 
matched<- inner_join(matched, df1, by="A2",na_matches = "na")
colnames(matched) <- c("item_nr","A1","A2","BlogFreq_A1","BlogFreqpm_A1","BlogCD_A1", "BlogCDPc_A1","WordLength_A1","isHarmonic_A1",
                    "BlogFreq_A2","BlogFreqpm_A2","BlogCD_A2", "BlogCDPc_A2","WordLength_A2","isHarmonic_A2") 





TURead_all_words <- TURead_all_words %>%
  distinct(Word, .keep_all = TRUE)

Words <- read_excel("TR_corpus.xlsx")

df_1 <- Words %>%
  #subset(lenght <= 8) %>%
  #subset(lenght >= 4) %>%
  #subset(logFreq < 11) %>%
  #subset(logFreq >= 10) %>%
  mutate(diac_u <- grepl("ü", Words, ignore.case = TRUE) & grepl("u", Words, ignore.case = TRUE),
         diac_o <- grepl("ö", Words, ignore.case = TRUE) & grepl("o", Words, ignore.case = TRUE),
         diac_i <- grepl("i", Words, ignore.case = TRUE) & grepl("ı", Words, ignore.case = TRUE),
         diac_s <- grepl("ş", Words, ignore.case = TRUE) & grepl("s", Words, ignore.case = TRUE),
         diac_c <- grepl("ç", Words, ignore.case = TRUE) & grepl("c", Words, ignore.case = TRUE),
         diac_g <- grepl("ğ", Words, ignore.case = TRUE) & grepl("g", Words, ignore.case = TRUE)
  ) %>%
  mutate(eligable = ifelse(rowSums(select(.,diac_o,diac_u,diac_i, diac_s,diac_c,diac_g)) > 0, "yes", "no")) %>%
  #select(-Diac_vowel, -Diac_cons,-no_Diac_cons,-no_Diac_vowel)%>%
  #filter(Type %in% c("Noun", "Adj","Adv")) %>% mutate(Freq_cond = ifelse(logFreq > median(logFreq), "High", "Low")) %>%
  subset(eligable == "yes") %>%
  select(-eligable)
