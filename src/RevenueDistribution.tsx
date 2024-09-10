/* eslint-disable @typescript-eslint/no-unused-vars */
// 'use client';

import { cx } from "../src/lib/utils";

import { Card } from "../src/components/Card";
import { DonutChart, TooltipProps } from "../src/components/DonutChart";
import React from "react";

const data = [
  {
    name: "Subscriptions",
    amount: 770400000,
    share: "32.1%",
    color: "bg-cyan-500 dark:bg-cyan-500",
  },
  {
    name: "Ad Revenue",
    amount: 470400000,
    share: "19.6%",
    color: "bg-blue-500 dark:bg-blue-500",
  },
  {
    name: "Partnerships",
    amount: 446400000,
    share: "18.6%",
    color: "bg-indigo-500 dark:bg-indigo-500",
  },
  {
    name: "Merchandise",
    amount: 367200000,
    share: "15.3%",
    color: "bg-violet-500 dark:bg-violet-500",
  },
  {
    name: "Other",
    amount: 345600000,
    share: "14.4%",
    color: "bg-gray-500 dark:bg-gray-500",
  },
];

// const currencyFormatter = (number: number) =>
//   "$" + Intl.NumberFormat("us").format(number).toString();
function formatRevenue(value) {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(1) + " B $";
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1) + " M $";
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1) + " K $";
  } else {
    return value + " $";
  }
}

// Helper function to sum numeric values in an array
function sumNumericArray(array) {
  return array.reduce((acc, value) => acc + value, 0);
}

// Function to get formatted value based on payload and data
function getFormattedValue(payload, data) {
  if (payload && payload.value) {
    // Format individual value if payload is available
    return formatRevenue(payload.value);
  }

  // Calculate and format total revenue if no payload
  const totalRevenue = sumNumericArray(
    data.map((dataPoint) => dataPoint.amount)
  );
  return formatRevenue(totalRevenue);
}
export default function RevenueDistribution() {
  const [datas, setDatas] = React.useState<TooltipProps | null>(null);

  // const sumNumericArray = (arr: number[]): number =>
  //   arr.reduce((sum, num) => sum + num, 0);

  // const currencyFormatter = (number: number) =>
  //   `$${Intl.NumberFormat("us").format(number)}`;

  const payload = datas?.payload?.[0];
  const formattedValue = getFormattedValue(payload, data);

  return (
    <section className="h-fit rounded-xl border bg-card text-card-foreground shadow col-span-4  lg:col-span-3 ">
      <Card className="">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-50">
          Revenue Distribution
        </h3>
        <div>
          {/* <p className="text-center text-sm text-gray-700 dark:text-gray-300">
            Revenue by category
          </p> */}
          <p className="mt-2 w-full text-center text-xl font-semibold text-gray-900 dark:text-gray-50">
            {formattedValue}
          </p>
          <DonutChart
            data={data}
            category="name"
            value="amount"
            className="mx-auto mt-8"
            colors={["blue", "violet", "cyan", "emerald", "gray"]}
            tooltipCallback={(props) => {
              if (props.active) {
                setDatas((prev) => {
                  if (prev?.payload[0].category === props.payload[0].category)
                    return prev;
                  return props;
                });
              } else {
                setDatas(null);
              }
              return null;
            }}
          />
        </div>
        {/* <DonutChart
          className="mt-8 flex items-center justify-center w-full"
          data={data}
          category="name"
          value="amount"
          showLabel={true}
          valueFormatter={currencyFormatter}
          showTooltip={false}
          colors={["cyan", "blue", "violet", "fuchsia"]}
        /> */}
        <p className="mt-8 flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
          <span>Category</span>
          <span>Amount / Share</span>
        </p>
        <ul
          role="list"
          className="mt-2 divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
        >
          {data.map((item) => (
            <li
              key={item.name}
              className="relative flex items-center justify-between py-2"
            >
              <div className="flex items-center space-x-2.5 truncate">
                <span
                  className={cx(item.color, "size-2.5 shrink-0 rounded-sm")}
                  aria-hidden={true}
                />
                <span className="truncate dark:text-gray-300">{item.name}</span>
              </div>
              <p className="flex items-center space-x-2">
                <span className="font-medium tabular-nums text-gray-900 dark:text-gray-50">
                  {formatRevenue(item.amount)}
                </span>
                <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium tabular-nums text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  {item.share}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
