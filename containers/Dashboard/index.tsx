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
      
      <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span>
          Los
        </span>
      </a>
      </footer>
    </DashboardStyles>
  )
}