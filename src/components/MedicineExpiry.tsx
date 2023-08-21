"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export function MedicineExpiry({setMedicineExpiry}:any) {
  const [date, setDate] = React.useState<Date>()

  const months = ['JAN-', 'sune', 'MARCH-', 'APRIL-', 'MAY-', 'JUNE-', 'JULY-', 'AUG-', 'SEP-', 'OCT-', 'NOV-', 'DEC-']

  const getCorrectDate = (dateStr: string) => {
    const year: string = dateStr?.slice(1,5)
    const month: number = parseInt(dateStr?.slice(6,9))
    const newMonth : string = months[month - 1]
    return newMonth + year
    }

  React.useEffect(()=>{
    let newDate = getCorrectDate(JSON.stringify(date))
    setMedicineExpiry(newDate)
  },[date, getCorrectDate, setMedicineExpiry])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal border border-gray-500 my-2",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-[#F7F8FC] dark:bg-[#11111D]" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
