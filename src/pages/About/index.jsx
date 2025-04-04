import React from 'react';
import { Layout, Menu, Button, Carousel, Card, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;

const About = () => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Header style={{ background: '#0d2b5b', padding: 0 }}>
        <div style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', padding: '0 24px', height: '60px', lineHeight: '60px' }}>
          인천청람중학교
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ background: '#0d2b5b' }}>
          <Menu.Item key="1" style={{ fontSize: '14px' }}>학교소개</Menu.Item>
          <Menu.Item key="2" style={{ fontSize: '14px' }}>교육활동</Menu.Item>
          <Menu.Item key="3" style={{ fontSize: '14px' }}>알림마당</Menu.Item>
          <Menu.Item key="4" style={{ fontSize: '14px' }}>게시판</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '24px' }}>
        <Carousel autoplay style={{ marginBottom: '24px' }}>
          <div>
            <img src="/banner1.gif" alt="배너1" style={{ width: '100%', border: '1px solid #ccc' }} />
          </div>
          <div>
            <img src="/banner2.gif" alt="배너2" style={{ width: '100%', border: '1px solid #ccc' }} />
          </div>
        </Carousel>

        <Row gutter={16}>
          <Col span={12}>
            <Card title="공지사항" bordered style={{ boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
              <ul style={{ fontFamily: 'Dotum, 돋움, sans-serif', fontSize: '13px' }}>
                <li>[04.01] 2025학년도 1학기 학사일정 안내</li>
                <li>[03.25] 교내 영어 말하기 대회 결과</li>
                <li>[03.10] 학부모 총회 개최 안내</li>
              </ul>
              <Button type="primary" size="small" style={{ marginTop: '12px', background: 'linear-gradient(to bottom, #1e499f, #133a83)', boxShadow: '2px 2px 0 #999', border: '1px solid #999' }}>
                더보기
              </Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="학교 갤러리" bordered style={{ boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
              <Row gutter={8}>
                <Col span={8}><img src="/gallery1.jpg" alt="갤1" style={{ width: '100%', border: '1px solid #ccc' }} /></Col>
                <Col span={8}><img src="/gallery2.jpg" alt="갤2" style={{ width: '100%', border: '1px solid #ccc' }} /></Col>
                <Col span={8}><img src="/gallery3.jpg" alt="갤3" style={{ width: '100%', border: '1px solid #ccc' }} /></Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center', fontSize: '12px', fontFamily: 'Dotum, 돋움, sans-serif', color: '#666' }}>
        © 2025 Incheon Cheongram Middle School. All rights reserved.
      </Footer>
    </Layout>
  );
};

export default About;
