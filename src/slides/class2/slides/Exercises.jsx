import React from 'react';
import {
  Slide,
  Heading,
  OrderedList,
  ListItem
} from 'spectacle';

export default () => (
  <>
    <Slide backgroundColor="#0d0d0d" className="flex-center-column">
      <Heading margin="0px" fontSize="50px">
        Práctica
      </Heading>

      <OrderedList fontSize={30}>
        <ListItem>
          <a href="https://codesandbox.io/s/counter-ocqj1">Counter</a>
        </ListItem>

        <ListItem>
          <a href="https://codesandbox.io/s/clock-2oqsz">Clock</a>
        </ListItem>

        <ListItem>
          <a href="https://codesandbox.io/s/form-j5kwf">Cart with Dynamic fields</a>
        </ListItem>
      </OrderedList>
    </Slide>
  </>
);
