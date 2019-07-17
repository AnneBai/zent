import * as React from 'react';
import { Omit } from 'utility-types';
import { DatePickers } from '../../datetimepicker/common/types';
import DateRangePicker, {
  IDateRangePickerProps,
} from '../../datetimepicker/DateRangePicker';
import { FormField } from '../Field';
import { IFormComponentProps, dateRangeDefaultValueFactory } from '../shared';

export type IFormDateRangePickerFieldProps = IFormComponentProps<
  DatePickers.RangeValue,
  Omit<IDateRangePickerProps, 'value'>
>;

export const FormDateRangePickerField: React.FunctionComponent<
  IFormDateRangePickerFieldProps
> = props => {
  return (
    <FormField
      {...props}
      defaultValue={props.defaultValue || dateRangeDefaultValueFactory}
    >
      {childProps => <DateRangePicker {...props.props} {...childProps} />}
    </FormField>
  );
};
