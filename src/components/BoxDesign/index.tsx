import React from "react";
import { Card, Divider, Space } from "antd";
import DocsButton from "../Button";
import { Button } from "antd";

export default function BoxDesign({ onClick }): JSX.Element {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: "flex" }}
      className="flex-nowrap"
    >
      <Card title="Button">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        <Divider />
      </Card>
    </Space>
  );
}
