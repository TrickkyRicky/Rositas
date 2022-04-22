import styled from "styled-components";
import { GrLocation } from "react-icons/gr";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";

export const Location = styled(GrLocation)`
  color: white;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  path {
    stroke: #fff;
  }
`;

export const FoodMenu = styled(MdOutlineRestaurantMenu)`
  color: white;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
`;

export const Mail = styled(HiOutlineMailOpen)`
  color: white;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
`;
