import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../componets/auth/Login';
import Home from '../componets/pages/Home';
import Register from '../componets/auth/Register';
import ProtectedRoute from './ProtectedRoutes';
import Search from '../componets/pages/Search';
import Library from '../componets/pages/Library';
import Profile from '../componets/pages/Profile';
import MainLayout from '../layouts/MainLayout';
import Playlist from '../componets/pages/Playlist';
import UserProfilePage from '../componets/pages/UserProfilePage';
import EmotionalAnalyticsDashboard from '../componets/pages/EmotionalAnaltics';
import PlayerPage from '../componets/pages/PlayerPage';
import SetPassword from '../componets/auth/SetPassword';
import OAuthSuccess from '../componets/OAuthSuccess';
import Onboarding from '../componets/pages/Onboarding';
import Support from "../componets/chatBot/Support"
import OnboardingRoute from '../componets/pages/OnboardingRoute';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />

        {/* Protected */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="onboarding"
            element={
              <OnboardingRoute>
                <Onboarding />
              </OnboardingRoute>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="library" element={<Library />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/playlist" element={<Playlist />} />

          {/* my profile page  */}
          <Route path="/my-profile" element={<UserProfilePage />} />
          <Route path='/emotional-analytics' element={<EmotionalAnalyticsDashboard />} />
          <Route path="support" element={<Support />} />
          <Route
            path="/player/:id"
            element={<PlayerPage />}
          />


          <Route path="*" element={<h1 className='text-center text-2xl mt-20'>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes