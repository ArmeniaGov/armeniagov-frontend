import React, { useState } from 'react';
import './tabs.scss';

type TabsItem = {title: string; content: React.ReactNode};

export interface TabsProps {
  tabs: TabsItem[];
  className?: string;
  onTabSelected?: (tab: TabsItem) => unknown;
}

export function Tabs(props: TabsProps) {
  const [currentTab, setCurrentTab] = useState(props.tabs[0]);

  return (
    <div className={`armeniagov-tabs ${props.className ? props.className : ''}`}>
      <h2 className="armeniagov-tabs__title">
        Contents
      </h2>
      <ul className="armeniagov-tabs__list">
        {
          props.tabs.map((tab, index) => (
            <li className={`armeniagov-tabs__list-item ${currentTab === tab ? 'armeniagov-tabs__list-item--selected' : ''}`} key={index}>
              <a className="armeniagov-tabs__tab" href={tab.title} onClick={e => { e.preventDefault(); setCurrentTab(tab); props.onTabSelected && props.onTabSelected(tab) }}>
                { tab.title }
              </a>
            </li>
          ))
        }
      </ul>

      <div className="armeniagov-tabs__panel">
        { currentTab.content }
      </div>
    </div>
  );
}

export default Tabs;
