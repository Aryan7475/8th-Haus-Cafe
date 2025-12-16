import React from 'react';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}