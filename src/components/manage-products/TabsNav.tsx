import React, { useState, ReactNode, ReactElement } from "react";

import { Box, Tabs as TabsContainer, Tab as TabItem } from "@mui/material";

import TabPanel from "./TabPanel";

type Props = {
  tabs: Array<{ title: string; icon: ReactElement; content: ReactNode }>;
};

const TabsNav = ({ tabs }: Props) => {
  const [value, setValue] = useState(0);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabsContainer value={value} onChange={handleChange}>
          {tabs.map((tab, index) => {
            return (
              <TabItem
                id={`tab-item-${index}`}
                key={`tab-item-${index}`}
                label={tab.title}
                icon={tab.icon}
              />
            );
          })}
        </TabsContainer>
      </Box>
      {tabs.map((tab, index) => {
        return (
          <TabPanel key={`tab-panel-${index}`} value={value} index={index}>
            {tab.content}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabsNav;
