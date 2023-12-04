
library(tidyverse)
library(readxl)

df <- data.frame(Words=c("özkan","oyun","erik","eleman"))

df1 <- All_words %>%
  mutate(harmonic = grepl("a|o|ı|u", Word, ignore.case = TRUE) & !grepl("e|i|ö|ü", Word, ignore.case = TRUE) | 
         grepl("e|i|ö|ü", Word, ignore.case = TRUE) & !grepl("a|ı|o|u", Word, ignore.case = TRUE),
         notharmonic = grepl("a|o|ı|u", Word, ignore.case = TRUE) & grepl("e|i|ö|ü", Word, ignore.case = TRUE) | 
         grepl("e|i|ö|ü", Word, ignore.case = TRUE) & grepl("a|ı|o|u", Word, ignore.case = TRUE)) %>%
  mutate(harmonic = ifelse(harmonic, "harmonic",NA),
         notharmonic = ifelse(notharmonic,"notharmonic","NA")) %>%
  mutate(isHarmonic = coalesce(harmonic, notharmonic)) %>%
  select(-notharmonic,-harmonic)
  

Words <- read_excel("Tur.Freq.3.Hun.xlsx")
Corpus <- Corpus %>% mutate(length = str_count(Word)) %>% filter(length < 7) %>% filter(length > 3)
# Words_df <- Words %>%
#   mutate(length = str_count(Words, "[A-Za-z]"),
#          logFreq = log(Freq)) %>%
#   subset(length <= 8) %>%
#   subset(length >= 4) %>%
#   subset(logFreq >= 10) %>%
#   subset(Type == "Noun")

df1 <- All_words %>% 
  #mutate(length = str_count(Word, "[A-Za-z]")) %>% filter(length < 7) %>% filter(length > 3) %>%
  mutate(vowel_n = str_count(Word, "[aeiıouöüAEIOUÖÜİ]")) %>%
  mutate(no_tr = str_count(Word, "[qQxXwW]")) %>%
  mutate(blank= str_count(Word, "[ ]")) %>%
  mutate(no= str_count(Word, "-")) %>%
  filter(vowel_n > 1) %>% filter(no_tr == 0) %>% filter(blank == 0) %>% filter(no == 0) %>% filter(BlogFreq != 0) %>%
  select(-no_tr,-vowel_n,-no,-blank) 
  



  #mutate(harmonic = grepl("a|o|ı|u", Word, ignore.case = TRUE) & !grepl("e|i|ö|ü", Word, ignore.case = TRUE) | 
  #         grepl("e|i|ö|ü", Word, ignore.case = TRUE) & !grepl("a|ı|o|u", Word, ignore.case = TRUE),
  #       notharmonic = grepl("a|o|ı|u", Word, ignore.case = TRUE) & grepl("e|i|ö|ü", Word, ignore.case = TRUE) | 
  #         grepl("e|i|ö|ü", Word, ignore.case = TRUE) & grepl("a|ı|o|u", Word, ignore.case = TRUE)) %>%
  #mutate(harmonic = ifelse(harmonic, "harmonic",NA),
  #       notharmonic = ifelse(notharmonic,"notharmonic",NA)) %>%
  #mutate(isHarmonic = coalesce(harmonic, notharmonic)) %>%
  #select(-notharmonic,-harmonic) %>%
  #filter(!is.na(isHarmonic))

table(df1$isHarmonic,df1$length)

writexl:::write_xlsx(df1, "All_words.xlsx")
colnames(Words_filtered)

df <- Words_filtered %>%
  rename(Target = Words...1,
         Eligable = ...9) %>%
  select(-Words...8) %>%
  filter(is.na(Eligable))
table(df$isHarmonic,df$length)

Zeynep<-read_excel("Words_filtered.xlsx")
Berceste<-read_excel("Words_filtered_B.xlsx")

Berceste$MergedColumn_b <- ifelse(!is.na(Berceste$birlesik), Berceste$birlesik, Berceste$ek)
Zeynep$MergedColumn_z <- ifelse(!is.na(Zeynep$...9), "X", NA)

names <- c("Words", "Freq", "Freq2","Type","length","logFreq","isHarmonic","X","Y","MergedColumn_z")
names(Zeynep) <- names
colnames(df_subset_vowel)

result <- Zeynep %>%
  left_join(Berceste, by = "Words")


result <- result[, !colnames(result) %in% c("X","Y","Freq.y","Freq2.y","Type.y","length.y","logFreq.y",
                                            "isHarmonic.y","birlesik","ek") ]
result$MatchedColumn <- ifelse(is.na(result$MergedColumn_b) & is.na(result$MergedColumn_z), NA, ifelse(!is.na(result$MergedColumn_b), result$MergedColumn_b, result$MergedColumn_z))

df_subset_vowel <- subset(result, is.na(MatchedColumn))

df_subset_vowel <- df_subset_vowel[, !colnames(df_subset_vowel) %in% c("X","Y","Freq.y","Freq2.y","Type.y","length.y","logFreq.y",
                                            "isHarmonic.y","birlesik","ek","MergedColumn_z","MergedColumn_b","MatchedColumn")]



table(df_subset_vowel_last$isHarmonic.x,df_subset_vowel_last$length.x)

df_subset_vowel_last <- df_subset_vowel %>% filter(length.x < 6)
writexl:::write_xlsx(df_subset_vowel_last, "df_subset_vowel_last.xlsx")

