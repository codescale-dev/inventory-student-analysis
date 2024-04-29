import { Router } from '@/adapters/routes';
import { Layout, Toaster } from '@/frameworks/components';
import '@/frameworks/styles/global.css';
import {
  defaultValueInventory,
  defaultValueProduct,
  useInventoryUseCaseContext,
  useProductUseCaseContext,
} from '@/main/index';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <useInventoryUseCaseContext.Provider value={defaultValueInventory}>
          <useProductUseCaseContext.Provider value={defaultValueProduct}>
            <Router />
          </useProductUseCaseContext.Provider>
        </useInventoryUseCaseContext.Provider>
        <Toaster />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
);
