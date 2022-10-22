import React, { useRef , useEffect} from 'react'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import moment from 'moment';

interface IDatePicker {
    value?: moment.Moment | string | number;
    onChange?: (ev: Event) => any;
    name?: string;
    label?: string;
    format?: string;
    fullWidth?: boolean;
    className?: string;
}

export const DatePicker = ({ value = 0, onChange = () => { }, name, label, format, fullWidth, className }: IDatePicker) => {
  const ref = useRef<HTMLInputElement>(null)
  const handleChange = (value: moment.Moment | null, keyboardInputValue?: string | undefined) => {
    if (ref.current) {
      ref.current.value = value?.format(format || 'YYYY-MM-DD')!
      const event = new Event("onHandleChange");
      ref.current.dispatchEvent(event);
    }
  }
  useEffect(() => {
			ref.current &&
			ref.current.addEventListener('onHandleChange', onChange);
    return () => {
      ref.current &&
      ref.current.removeEventListener("onHandleChange", onChange);
		};
	});
  return (
    <>
      <LocalizationProvider
          dateAdapter={AdapterMoment}
      >
        <DesktopDatePicker
              inputFormat={format}
              onChange={handleChange}
              value={typeof value === "number" ? moment.unix(value) : moment(value)}
              renderInput={(params) => <TextField {...params} fullWidth={fullWidth} />}
              label={label}
              className={className}
        />
      </LocalizationProvider>
      <input type="text" ref={ref} name={name} style={{display:"none"} } />
    </>
  )
}
