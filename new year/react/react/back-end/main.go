package main

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"
)

type HandlerData struct {
	TimeStamp int64 `json:"time_stamp"`
	Days      int64 `json:"days"`
}

func makeHandlerData(timeStamp int64, days int64) *HandlerData {
	return &HandlerData{
		TimeStamp: timeStamp,
		Days:      days,
	}
}

func daysHandler(writer http.ResponseWriter, r *http.Request) {
	time_stamp, _ := strconv.ParseInt(r.URL.Query().Get("time_stamp"), 10, 0)

	now := time.Now()
	parse := time.Unix(time_stamp, 0)
	days := 365 - parse.YearDay()

	data := makeHandlerData(now.Unix(), int64(days))

	encodedData, _ := json.Marshal(data)

	writer.Header().Set("Access-Control-Allow-Origin", "*")
	writer.Header().Set("Content-Type", "application/json")

	if _, err := writer.Write(encodedData); err != nil {
		panic(err)
	}
}

func rootHandler(writer http.ResponseWriter, _ *http.Request) {
	writer.WriteHeader(404)

	if _, err := writer.Write([]byte("Just try '/getDays'")); err != nil {
		panic(err)
	}
}

func main() {
	http.HandleFunc("/", rootHandler)
	http.HandleFunc("/getDays", daysHandler)

	if err := http.ListenAndServe("localhost:3001", nil); err != nil {
		panic(err)
	}
}
