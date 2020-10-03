import React from "react";
import streamThumbnail from "../../images/stream_thumbnail.jpg";

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamAvatar,
  StreamUsername,
  StreamHeader,
  TagRow,
  TagView,
  TagText,
   StreamDescription,
   StreamCategory
} from "./styles";

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>rodz_oficial</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
              Front-end com Next.js, Chakra UI e Graphl
          </StreamDescription>
          <StreamCategory numberOfLines={1} >
               Science & Technology
          </StreamCategory>
        </StreamRow>
        <TagRow>
          <TagView>
            <TagText>Portugues</TagText>
          </TagView>

          <TagView>
            <TagText>develop</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
