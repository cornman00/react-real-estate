import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { HouseConsumer } from "../context"; // use HouseConsumer, not HouseContext, since RoomsContainer is a function component
import Loading from "./Loading";

export default function RoomsContainer() {
  return (
    <HouseConsumer>
      {value => {
        const { rooms, sortedRooms, loading } = value;
        if (loading) {
          return <Loading />;
        }

        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </HouseConsumer>
  );
}
