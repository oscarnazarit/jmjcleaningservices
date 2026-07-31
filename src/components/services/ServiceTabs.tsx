import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TabContents from './TabContents';

export function ServiceTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList variant="line">
        <TabsTrigger value="residential">Residential</TabsTrigger>
        <TabsTrigger value="commercial">Commercial</TabsTrigger>
        <TabsTrigger value="deep">Deep Cleaning</TabsTrigger>
        <TabsTrigger value="move">Move in/out</TabsTrigger>
        <TabsTrigger value="post-construction">Post-Construction Cleaning</TabsTrigger>
        <TabsTrigger value="special">Special Services (Experimental) </TabsTrigger>
      </TabsList>
      <TabsContent value="residential">
        <TabContents service={'residential'} />
      </TabsContent>
      <TabsContent value="commercial">
        <TabContents service={'commercial'} />
      </TabsContent>
      <TabsContent value="deep">
        <TabContents service={'deep'} />
      </TabsContent>
      <TabsContent value="move">
        <TabContents service={'move'} />
      </TabsContent>
      <TabsContent value="post-construction">
        <TabContents service={'post-construction'} />
      </TabsContent>
      <TabsContent value="special">
        <TabContents service={'special'} />
      </TabsContent>
    </Tabs>
  );
}
