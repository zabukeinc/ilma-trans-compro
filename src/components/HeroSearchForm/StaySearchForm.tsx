import React, { useEffect, useState } from 'react'
import LocationInput from './LocationInput'
import { GuestsInputProps } from './GuestsInput'
import { FocusedInputShape } from 'react-dates'
import StayDatesRangeInput from './StayDatesRangeInput'
import ButtonSubmit from './ButtonSubmit'
import moment from 'moment'
import { FC } from 'react'

export interface DateRage {
  startDate: moment.Moment | null
  endDate: moment.Moment | null
}

export interface StaySearchFormProps {
  haveDefaultValue?: boolean
}

// DEFAULT DATA FOR ARCHIVE PAGE
const defaultLocationValue = 'Bali, Indonesia'
const defaultDateRange = {
  startDate: moment(),
  endDate: moment().add(4, 'days')
}
const defaultGuestValue: GuestsInputProps['defaultValue'] = {
  guests: 2
}

const StaySearchForm: FC<StaySearchFormProps> = ({
  haveDefaultValue = false
}) => {
  const [dateRangeValue, setDateRangeValue] = useState<DateRage>({
    startDate: null,
    endDate: null
  })
  const [locationInputValue, setLocationInputValue] = useState('')
  const [guestValue, setGuestValue] = useState({})

  const [dateFocused, setDateFocused] = useState<FocusedInputShape | null>(null)

  //
  useEffect(() => {
    if (haveDefaultValue) {
      setDateRangeValue(defaultDateRange)
      setLocationInputValue(defaultLocationValue)
      setGuestValue(defaultGuestValue)
    }
  }, [])
  //

  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex flex-col md:flex-row md:items-center rounded-3xl lg:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-900 divide-y divide-neutral-200 md:divide-y-0">
        <LocationInput
          defaultValue={locationInputValue}
          onChange={(e) => setLocationInputValue(e)}
          onInputDone={() => setDateFocused('startDate')}
        />
        <StayDatesRangeInput
          defaultValue={dateRangeValue}
          defaultFocus={dateFocused}
          onFocusChange={(focus) => setDateFocused(focus)}
          onChange={(data) => setDateRangeValue(data)}
        />
        {/* BUTTON SUBMIT OF FORM */}
        <div className="px-4 py-4 lg:py-0">
          <ButtonSubmit />
        </div>
      </form>
    )
  }

  return renderForm()
}

export default StaySearchForm
