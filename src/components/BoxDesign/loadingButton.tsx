import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space, Card } from 'antd';

export default function LoadingButton(): JSX.Element {
  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ display: "flex" }}
      className="flex-nowrap"
    >
      <Card title="Button">
        <Space wrap>
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon={<SearchOutlined />}>
            Search
          </Button>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
        </Space>
        <Space wrap>
          <Tooltip title="search">
            <Button shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button icon={<SearchOutlined />}>Search</Button>
          <Tooltip title="search">
            <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
          <Button type="dashed" icon={<SearchOutlined />}>
            Search
          </Button>
          <Button icon={<SearchOutlined />} href="https://www.google.com" />
        </Space>
      </Card>
    </Space>
  );
};
