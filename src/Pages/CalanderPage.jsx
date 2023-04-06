import { useState } from 'react'
import { addDays } from 'date-fns';
import styled from 'styled-components';
import { DateRangePicker } from 'react-date-range';
import { useDispatch, useSelector } from 'react-redux'
import {changeDate, selectStartDate, selectEndDate} from '../features/hotel/hotelSlice'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
export const CalanderPage = () =>
{
  const endDate = useSelector( selectEndDate )
  const startDate = useSelector(selectStartDate)
  const dispatch = useDispatch();
  const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
  ] );
  const startDateValue = state[0].startDate.getFullYear() + "-" + ("0" + (state[0].startDate.getMonth()+1)).slice(-2) + "-" + ("0" + state[0].startDate.getDate()).slice(-2)
  const endDateValue = state[ 0 ].endDate.getFullYear() + "-" + ( "0" + ( state[ 0 ].endDate.getMonth() + 1 ) ).slice( -2 ) + "-" + ( "0" + state[ 0 ].endDate.getDate() ).slice( -2 )
  const onSelectClicked = ( e ) =>
  {
    e.preventDefault();
    dispatch(changeDate({startDate: startDateValue, endDate: endDateValue}))
  }
  return (
    <Container>
      <DateRangePicker
    onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  direction="horizontal"
  preventSnapRefocus={ true }
  ranges={state}
  calendarFocus="backwards"
      />
      <Button onClick={onSelectClicked}>Select</Button>
  </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  flex-direction:column;
`;

const Button = styled.button`
  width: 85%;
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
`;