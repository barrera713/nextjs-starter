import React from 'react';
import { DashboardStyles } from './styles';


interface DashboardContainerProps {
  
}


export const DashboardContainer: React.FC<DashboardContainerProps> = (props) => { 
  return (
    <DashboardStyles>
      <main data-testid="dashboardContainer">
      <h1>
        Nerd alert.
      </h1>
      
      <p>
        <code>pages/index.tsx</code>
      </p>
      </main>
    </DashboardStyles>
  )
}