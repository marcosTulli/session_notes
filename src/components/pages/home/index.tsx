import { CommonKeys } from '@/config';
import { HomePageTitle } from './components';
import { AppPageContainer } from '@/components/common/Page';

export default function HomePageContent() {
  return (
    <AppPageContainer id={CommonKeys.Home}>
      <HomePageTitle />
    </AppPageContainer>
  );
}
