import DarkModeButton from "@/components/DarkModeButton";
import Badge from "@/shared/display/Badge";
import Card from "@/shared/display/Card";
import CodeBox from "@/shared/display/CodeBox";
import ListGroup from "@/shared/display/ListGroup";
import Table from "@/shared/display/Table";
import Timeline from "@/shared/display/Timeline";
import Center from "@/shared/layouts/Center";
import Divider from "@/shared/layouts/Divider";
import Spacing from "@/shared/layouts/Spacing";
import Text from "@/shared/themes/Text";

export default function Home() {
  return (
    <>
      <DarkModeButton />

      <Divider size="md" />

      <Divider size="lg" />
    </>
  );
}
