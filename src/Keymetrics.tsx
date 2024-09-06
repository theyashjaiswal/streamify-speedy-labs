// 'use client';

import { cx } from "../src/lib/utils";

import { Card } from "../src/components/Card";

const data = [
  {
    name: "Total Users",
    stat: "10,450",
    change: "-12.5%",
    changeType: "negative",
  },
  {
    name: "Active Users",
    stat: "56.1%",
    change: "+1.8%",
    changeType: "positive",
  },
  {
    name: "Total streams",
    stat: "50Bhours",
    change: "+19.7%",
    changeType: "positive",
  },
  {
    name: "Revenue",
    stat: "80B$(CA)",
    change: "+33.7%",
    changeType: "positive",
  },
  {
    name: "Top Artist",
    stat: "King",
    // change: "+33.7%",
    // changeType: "positive",
  },
];

export default function Keymetrics() {
  return (
    <>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6 pt-2">
        {data.map((item) => (
          <Card key={item.name}>
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
          </Card>
        ))}
      </dl>
    </>
  );
}
