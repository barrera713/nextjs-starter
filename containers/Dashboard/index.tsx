import React from 'react';
import { DashboardStyles } from './styles';


interface DashboardContainerProps {
  
}


export const DashboardContainer: React.FC<DashboardContainerProps> = (props) => { 
  return (
    <DashboardStyles>
      <main data-testid="dashboardContainer">
      <h1>
        Hello, nerds :)
      </h1>
      </main>
    </DashboardStyles>
  )
}