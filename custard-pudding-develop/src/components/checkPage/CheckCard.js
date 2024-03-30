import styled from 'styled-components';
const TAG =
  'https://likelion12th-apply-pages.s3.ap-northeast-2.amazonaws.com/svgs/card_tag_upload.svg';
import { useNavigate } from 'react-router-dom';
import SmallButton from './SmallButton';

import { resultData } from './resultData';

const CheckCard = ({ status, value }) => {
  const navigate = useNavigate();
  let result = {};

  switch (status) {
    case 'check_success':
      result = resultData['check_success'];
      break;

    case 'check_failed':
      result = resultData['check_failed'];
      break;

    case 'rejected':
      result = resultData['rejected'];
      break;
  }

  return (
    <CardContainer>
      <Tag src={TAG} />
      <Content>{value + result.content}</Content>
      <Icon src={result.img} />
      <SmallButton type="button" onClick={() => navigate('/')}>
        메인으로
      </SmallButton>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.MODAL_BG};

  width: 240px;
  height: 300px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 340px;
    height: 420px;
    margin-top: 50px;
  }
`;
const Tag = styled.img`
  display: block;

  width: 70px;
  margin: -44px auto 0;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 105px;
    margin: -65px auto 0;
  }
`;
const Content = styled.div`
  margin: 30px 0 20px;
  text-align: center;
  white-space: pre-wrap;
  color: ${({ theme }) => theme.colors.WHITE_TXT};

  ${({ theme }) => theme.typographies.DEFAULT_TXT};
  line-height: 30px;

  @media ${({ theme }) => theme.devices.TABLET} {
    font-size: 28px;
    font-weight: 700;
    line-height: 45px;
  }
`;
const Icon = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 150px;
  height: 95px;
  @media ${({ theme }) => theme.devices.TABLET} {
    width: 200px;
    height: 160px;
    ${({ theme }) => theme.typographies.TITLE};
  }
`;
export default CheckCard;
