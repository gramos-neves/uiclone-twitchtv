import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import colors from '../../styles/colors';


import { Container, Avatar, OnlineStatus,RightSider , Button} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
     <Avatar>
       <OnlineStatus></OnlineStatus>
     </Avatar>


     <RightSider>
        <Button>
            <MaterialIcons 
               name="notifications-none"
               size={26}
               color={colors.black}
             />
        </Button>
        <Button>
            <MaterialCommunityIcons
               name="message-outline"
               size={26}
               color={colors.black}
             />
        </Button>
        <Button>
            <MaterialIcons 
               name="search"
               size={26}
               color={colors.black}
             />
        </Button>
        
     </RightSider>
    </Container>
  );
};

export default Header;
