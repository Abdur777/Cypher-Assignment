// MainContent.jsx

import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import ContainerMain from './ContainerMain';
import TicketContainer from './TicketContainer';

const MainContent = ({ apiData }) => {
  const { state } = useAppContext();

  const getFilteredAndSortedTickets = () => {
    let filteredTickets = [...apiData.tickets];

    
    if (state.grouping === 'status') {
      
      filteredTickets = groupByStatus(filteredTickets);
    } else if (state.grouping === 'user') {
      
      filteredTickets = groupByUser(filteredTickets, apiData.users);
    } else if (state.grouping === 'priority') {
      
      filteredTickets = groupByPriority(filteredTickets);
    }


    if (state.sorting === 'priority') {
      
      filteredTickets = sortByPriority(filteredTickets);
    } else if (state.sorting === 'title') {
     
      filteredTickets = sortByTitle(filteredTickets);
    }

    return filteredTickets;
  };

  
  const groupByStatus = (tickets) => {
    const statusGroups = {
      Backlog: [],
      Todo: [],
      'In progress': [],
      Done: [],
      Cancelled: [],
    };

    tickets.forEach((ticket) => {
      const status = ticket.status;
      statusGroups[status].push(ticket);
    });

    return statusGroups;
  };


  const groupByUser = (tickets, users) => {
    const userGroups = {};

    users.forEach((user) => {
      userGroups[user.name] = [];
    });

    tickets.forEach((ticket) => {
      const userId = ticket.userId;
      const user = users.find((u) => u.id === userId);
      if (user) {
        const userName = user.name;
        userGroups[userName].push(ticket);
      }
    });

    return userGroups;
  };


  const groupByPriority = (tickets) => {
    const priorityGroups = {
      'No Priority': [],
      Low: [],
      Medium: [],
      High: [],
      Urgent: [],
    };

    tickets.forEach((ticket) => {
      const priority = ticket.priority;
      switch (priority) {
        case 0:
          priorityGroups['No Priority'].push(ticket);
          break;
        case 1:
          priorityGroups.Low.push(ticket);
          break;
        case 2:
          priorityGroups.Medium.push(ticket);
          break;
        case 3:
          priorityGroups.High.push(ticket);
          break;
        case 4:
          priorityGroups.Urgent.push(ticket);
          break;
        default:
          break;
      }
    });

    return priorityGroups;
  };


const sortByPriority = (tickets) => {
    if (Array.isArray(tickets)) {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else {
      
      const sortedGroups = {};
      Object.keys(tickets).forEach((group) => {
        sortedGroups[group] = tickets[group].sort((a, b) => b.priority - a.priority);
      });
      return sortedGroups;
    }
  };

  
  const sortByTitle = (tickets) => {
    if (Array.isArray(tickets)) {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      
      const sortedGroups = {};
      Object.keys(tickets).forEach((group) => {
        sortedGroups[group] = tickets[group].sort((a, b) => a.title.localeCompare(b.title));
      });
      return sortedGroups;
    }
  };

  return (
    <main className="bg-[#F4F5F8] h-auto">
      <section className="grid grid-cols-5 gap-[15px] pt-2.5 pb-2.5 ml-[21.594px] mr-[21.609px] min-h-[92vh] box-border scroll-smooth">
        {Object.entries(getFilteredAndSortedTickets()).map(([group, tickets]) => (
          <div key={group}>
            <ContainerMain title={group} count={tickets.length} />
            <div className="flex flex-col gap-[0.5rem]">
              {tickets.map((ticket) => (
                <TicketContainer key={ticket.id} ticket={ticket} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default MainContent;
