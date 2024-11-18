import { Request, Response } from "express";
import Topic from "../../models/topic.model";
import Song from "../../models/song.model";
import Singer from "../../models/singer.model";

// [GET] /admin/dashboard
export const index = async (req: Request, res: Response) => {
  const statistic = {
    topicSong: {
      total: 0,
      active: 0,
      inactive: 0,
    },
    song: {
      total: 0,
      active: 0,
      inactive: 0,
    },
    singer: {
      total: 0,
      active: 0,
      inactive: 0,
    },
    account: {
      total: 0,
      active: 0,
      inactive: 0,
    },
    user: {
      total: 0,
      active: 0,
      inactive: 0,
    },
  };
  // topicSong
  statistic.topicSong.total = await Topic.countDocuments({
    deleted: false,
  });

  statistic.topicSong.active = await Topic.countDocuments({
    status: "active",
    deleted: false,
  });

  statistic.topicSong.inactive = await Topic.countDocuments({
    status: "inactive",
    deleted: false,
  });
  // End topicSong

  // song
  statistic.song.total = await Song.countDocuments({
    deleted: false,
  });

  statistic.song.active = await Song.countDocuments({
    status: "active",
    deleted: false,
  });

  statistic.song.inactive = await Song.countDocuments({
    status: "inactive",
    deleted: false,
  });
  // End song

  // singer
  statistic.singer.total = await Singer.countDocuments({
    deleted: false,
  });

  statistic.singer.active = await Singer.countDocuments({
    status: "active",
    deleted: false,
  });

  statistic.singer.inactive = await Singer.countDocuments({
    status: "inactive",
    deleted: false,
  });
  // End singer
  
  res.render("admin/pages/dashboard/index", {
    statistic: statistic,
    pageTitle: "Tổng quan",
  });
};
