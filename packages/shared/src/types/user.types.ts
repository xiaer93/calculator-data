export interface User {
  id: string;
  email: string;
  name?: string;
  subscription: 'free' | 'premium';
  createdAt: Date;
  updatedAt: Date;
}

export interface UserSubscription {
  userId: string;
  plan: 'free' | 'premium';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate?: Date;
}
