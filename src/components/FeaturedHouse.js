import React, { Component } from "react";
import { HouseContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";

export default class FeaturedHouse extends Component {
  static contextType = HouseContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <h2
          style={{
            textAlign: "center",
            fontStyle: "Georgia",
            marginBottom: "3rem"
          }}
        >
          Featured Houses
        </h2>
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
