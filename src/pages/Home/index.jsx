import React, { useState } from "react";
import { Layout, Menu, Drawer, Button, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import { Carousel } from "antd";

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;

const topMenuItems = [
  {
    key: "m1",
    label: "단체소개",
    children: [
      {
        key: "m1s1",
        label: <Link to="/">총장 인사말</Link>,
      },
      {
        key: "m1s2",
        label: <Link to="/">연혁</Link>,
      },
      {
        key: "m1s3",
        label: <Link to="/">부서 소개</Link>,
      },
      {
        key: "m1s4",
        label: <Link to="/">직원 소개</Link>,
      },
    ],
  },
  {
    key: "m2",
    label: "단체소식",
    children: [
      {
        key: "m2s1",
        label: <Link to="/">공지사항</Link>,
      },
      {
        key: "m2s2",
        label: <Link to="/">단체 일정</Link>,
      },
      {
        key: "m2s3",
        label: <Link to="/">채용</Link>,
      },
    ],
  },
  {
    key: "m3",
    label: "직원마당",
    children: [
      {
        key: "m3s1",
        label: <Link to="/">사규</Link>,
      },
      {
        key: "m3s2",
        label: <Link to="/">직원 복지</Link>,
      },
      {
        key: "m3s3",
        label: <Link to="/">노동 조합</Link>,
      },
    ],
  },
  {
    key: "m4",
    label: "시민마당",
    children: [
      {
        key: "m4s1",
        label: <Link to="/">민원신청</Link>,
      },
      {
        key: "m4s2",
        label: <Link to="/">민원사례</Link>,
      },
    ],
  },
];

const AppLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* GNB */}
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: 20,
          background: "#fff",
          boxShadow: "0 2px 8px #f0f1f2",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: 18 }}>MyLogo</div>

        {!isMobile && (
          <Menu
            mode="horizontal"
            items={topMenuItems}
            style={{ flex: 1, justifyContent: "center" }}
          />
        )}

        {isMobile ? (
          <>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerOpen(true)}
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setDrawerOpen(false)}
              open={drawerOpen}
            >
              <Menu mode="vertical" items={topMenuItems} />
            </Drawer>
          </>
        ) : (
          <Button type="link">Login</Button>
        )}
      </Header>

      {/* Main Layout */}
      <Layout style={{ padding: 24 }}>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            borderRadius: 8,
            minHeight: 280,
          }}
        >
          <Carousel autoplay>
            <div>
              <img
                src="/images/banner1.gif"
                alt="배너1"
                style={{ width: "100%", border: "1px solid #ccc" }}
              />
            </div>
            <div>
              <img
                src="/images/banner2.gif"
                alt="배너2"
                style={{ width: "100%", border: "1px solid #ccc" }}
              />
            </div>
          </Carousel>
          여기에 메인 콘텐츠가 들어갑니다.
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
