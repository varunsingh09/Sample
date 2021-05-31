import React from "react";
import { string } from "prop-types";

import {
  Location,
  Content,
  Description,
  Place,
  Icon,
} from "./styles";

const LocationShow = ({ description, place, iconSrc }) => (
  <Location>
    <Icon src={iconSrc} alt="" />
    <Content>
      <Description>{description}</Description>
      <Place>{place}</Place>
    </Content>
  </Location>
);

LocationShow.propTypes = {
  description: string.isRequired,
  place: string.isRequired,
  iconSrc: string.isRequired,
};

export default LocationShow;
