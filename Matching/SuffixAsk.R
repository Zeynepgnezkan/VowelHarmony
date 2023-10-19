
library(readxl)
library(tidyverse)
library(LexOPS)
library(openai)
library(progressr)
library(purrr)
library(stringr)
library(pbapply)

get_suffix <- function(word, progressbar = NULL){
  if(!is.null(progressbar)){
    progressbar(message = word)
  }
  msg <- create_chat_completion(
    model = "gpt-3.5-turbo",
    messages = list(
      list(
        "role" = "system",
        "content" = "You are an assistant who decides whether Turkish words have suffixes or not. Answer YES if it is an affixed word or NO if it is not."
      ),
      list(
        "role" = "user",
        "content" = "Ayağımda"
      ),
      list(
        "role" = "assistant",
        "content" = "yes"
      ),
      list(
        "role" = "user",
        "content" = "Güneş"
      ),
      list(
        "role" = "assistant",
        "content" = "no"
      ),
      list(
        "role" = "user",
        "content" = "çeşitli"
      ),
      list(
        "role" = "assistant",
        "content" = "no"
      ),
      list(
        "role" = "user",
        "content" = word
      )
    )
  )
  return(msg$choices$message.content)
}

rate3 <- rate_backoff(pause_base = 3, max_times = 1000)

get_suffix_insistently <- insistently(get_suffix, quiet = FALSE, rate = rate3)

Words <- read_excel("subset_df.xlsx")

Words$suffix = NA

for(i in 1:nrow(Words)){
  Words$suffix[i] <- get_suffix_insistently(Words$Words[i])
  cat("Word:", i, "\r")
  
}

writexl:::write_xlsx(Words, "subset_df_AI.devame.edecek.xlsx")


