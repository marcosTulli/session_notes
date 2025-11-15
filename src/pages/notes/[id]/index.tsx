import { AppPageContainer } from '@/components';
import { NoteDetailPageContent } from '@/components/pages';
import { CommonKeys } from '@/config';
import React from 'react';

const NoteDetailPage: React.FC = () => {
  return (
    <AppPageContainer id={CommonKeys.Notes}>
      <NoteDetailPageContent />
    </AppPageContainer>
  );
};

export default NoteDetailPage;
