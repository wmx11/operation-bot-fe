import { Text } from '@mantine/core';
import React, { FC } from 'react';

type TimelineTypes = {
  data: {
    label?: string;
    date?: string;
    content?: string;
    isComplete?: boolean;
  }[];
};

const Timeline: FC<TimelineTypes> = ({ data }) => {
  return (
    <div className="flex">
      {data &&
        data.length &&
        data.map(({ label, date, content, isComplete }, index) => (
          <div key={`timeline_item_${index}`} className="text-center flex-1">
            <Text weight={700} className="text-xl">
              {label}
            </Text>
            <div
              className={`border-b ${
                isComplete ? 'border-secondaryGreen' : 'border-secondaryGray'
              } } relative flex items-center justify-center my-4`}
            >
              <div
                className={`absolute p-2 ${
                  isComplete ? 'bg-secondaryGreen' : 'bg-secondaryGray'
                } rounded-full`}
              ></div>
            </div>
            <Text className="mb-2" weight={700}>
              {date}
            </Text>
            <Text size="sm" className="px-6">
              {content}
            </Text>
          </div>
        ))}
    </div>
  );
};

export default Timeline;
