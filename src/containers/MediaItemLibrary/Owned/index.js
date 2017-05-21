/*
 * Shared Streams
 *
 *
 */

import React from 'react';
import styled from 'styled-components';

import { UserCanAccount } from 'config.routes/UserRoutePermissions';

const Wrapper = styled.div`
  height:100%;
  width:100%;
`;

const Owned = () => <Wrapper>In Blog View</Wrapper>;

export default UserCanAccount(Owned);
