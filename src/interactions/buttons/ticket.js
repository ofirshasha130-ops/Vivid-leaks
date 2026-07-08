import createTicketHandler, {
  closeTicketHandler,
  claimTicketHandler,
  priorityTicketHandler,
  pinTicketHandler,
  unclaimTicketHandler,
  reopenTicketHandler,
  deleteTicketHandler,
  renameTicketHandler,
  renameTicketModalHandler,
} from '../../handlers/ticketButtons.js';

export default [
  createTicketHandler,
  closeTicketHandler,
  claimTicketHandler,
  priorityTicketHandler,
  pinTicketHandler,
  unclaimTicketHandler,
  reopenTicketHandler,
  deleteTicketHandler,
  renameTicketHandler,
  renameTicketModalHandler,
];