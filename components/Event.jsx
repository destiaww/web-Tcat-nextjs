import Image from "next/image";
import Link from "next/link";
import React from "react";
import playfestImg from "../public/assets/event/playfest.png";
import pestaporaImg from "../public/assets/event/pestapora.jpeg";
import EventItem from "./EventItem";


const Event = () => {
  return (
    <div id="event" className="w-full pb-10">
      <div className="col-span-2">
        <h2 className="py-4 flex text-white justify-center">Event</h2>
        <div className="pb-10 flex items-center justify-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-800 dark:text-gray-100">
          <a
            rel="noopener noreferrer"
            href="/#event"
            className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 text-gray-400"
          >
            Music
          </a>
          <a
            rel="noopener noreferrer"
            href="/film"
            className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 text-gray-400"
          >
            Film
          </a>
        </div>
        <div className="px-6 flex justify-center grid md:grid-cols-3 gap-20">
          <EventItem
            title="Pestapora 2023"
            backgroundImg={pestaporaImg}
            EventUrl="/pestapora"
            tech="Music Fest"
          />
          <EventItem
            title="Play Music Festival 2023"
            backgroundImg={playfestImg}
            EventUrl="/playfest"
            tech="Music Fest"
          />
          <EventItem
            title="Pestapora 2023"
            backgroundImg={pestaporaImg}
            EventUrl="/pestapora"
            tech="Music Fest"
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
