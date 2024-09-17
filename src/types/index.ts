// Define interfaces and types used throughout the application

interface User {
  id: number;
  name: string;
  email: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
}

export interface UsersResponse {
  users: User[];
  pagination: Pagination;
}