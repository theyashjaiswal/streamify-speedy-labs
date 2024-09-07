// 'use client';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../src/components/ui/avatar";

import { cx } from "../src/lib/utils";

import { Card } from "../src/components/Card";

const data = [
  {
    name: "Total Users",
    stat: "10,450",
    change: "-12.5%",
    changeType: "negative",
    cardType: "NoAvatar",
  },
  {
    name: "Active Users",
    stat: "56.1%",
    change: "+1.8%",
    changeType: "positive",
    cardType: "NoAvatar",
  },
  {
    name: "Total streams",
    stat: "50Bhours",
    change: "+19.7%",
    changeType: "positive",
    cardType: "NoAvatar",
  },
  {
    name: "Revenue",
    stat: "80B$(CA)",
    change: "+33.7%",
    changeType: "positive",
    cardType: "NoAvatar",
  },
  {
    name: "Top Artist",
    stat: "Drake",
    // change: "+33.7%",
    // changeType: "positive",
    cardType: "Avatar",
  },
];

export default function Keymetrics() {
  return (
    <>
      <dl className="flex flex-col xl:flex-row  md:flex-nowrap  lg:flex-wrap gap-4 items-center p-6 pt-2">
        {data.map((item) => (
          <Card key={item.name} className="w-full xl:max-w-80">
            {item.cardType == "Avatar" ? (
              <div className="flex justify-between">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
                    {item.name}
                  </dt>
                  <dd className="mt-2 flex items-baseline space-x-2.5">
                    <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                      {item.stat}
                    </span>
                    <span
                      className={cx(
                        item.changeType === "positive"
                          ? "text-emerald-700 dark:text-emerald-500"
                          : "text-red-700 dark:text-red-500",
                        "text-sm font-medium"
                      )}
                    >
                      {item.change}
                    </span>
                  </dd>
                </div>
                <Avatar className="self-center">
                  <AvatarImage src="https://i.scdn.co/image/ab676161000051744293385d324db8558179afd9" />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-500">
                  {item.name}
                </dt>
                <dd className="mt-2 flex items-baseline space-x-2.5">
                  <span className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
                    {item.stat}
                  </span>
                  <span
                    className={cx(
                      item.changeType === "positive"
                        ? "text-emerald-700 dark:text-emerald-500"
                        : "text-red-700 dark:text-red-500",
                      "text-sm font-medium"
                    )}
                  >
                    {item.change}
                  </span>
                </dd>
              </div>
            )}
          </Card>
        ))}
      </dl>
    </>
  );
}
