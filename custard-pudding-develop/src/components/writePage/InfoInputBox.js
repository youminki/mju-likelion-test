import styled from 'styled-components';
import { INPUT_LABEL_LIST } from '../../pages/ApplyWrite/data/InfoInputData';
import { PART } from '../../pages/ApplyWrite/data/InfoInputData';
import UserInfoInput from './UserInfoInput';
import SelectBox from './SelectBox';

const InfoInputBox = ({
  register,
  errors,
  selectedPart,
  handlePartClick,
  setValue,
  majorData,
  getValues,
  studentIdValue,
}) => {
  return (
    <Container>
      <LeftInnerInputBox>
        {INPUT_LABEL_LIST.left.map((item) =>
          item.name === 'grade' || item.name === 'majors' ? (
            <SelectBox
              key={item.id}
              name={item.name}
              label={item.label}
              majorData={majorData}
              getValues={getValues}
              setValue={setValue}
            />
          ) : (
            <UserInfoInput
              key={item.id}
              label={item.label}
              name={item.name}
              isDisabled={item.isDisabled}
              register={register}
              errors={errors}
              setValue={setValue}
              getValues={getValues}
              studentIdValue={studentIdValue}
              placeholder={item.placeholder}
              majorData={majorData}
            />
          ),
        )}
      </LeftInnerInputBox>
      <HorizontalLine />
      <RightInnerInputBox>
        {INPUT_LABEL_LIST.right.map((item) => (
          <UserInfoInput
            key={item.id}
            label={item.label}
            name={item.name}
            register={register}
            errors={errors}
            placeholder={item.placeholder}
          />
        ))}
        <ApplyPartBox>
          <PartLabel>지원파트</PartLabel>
          <PartBtnBox>
            {PART.map((item) => (
              <PartBtn
                key={item.id}
                $select={selectedPart === item.partEn}
                onClick={() => handlePartClick(item.partEn)}
                type="button"
              >
                {item.partKo}
              </PartBtn>
            ))}
          </PartBtnBox>
        </ApplyPartBox>
      </RightInnerInputBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #939393;
  border-radius: 15px;
  padding: 35px 52px;
  width: 330px;
  height: 367px;
  @media ${({ theme }) => theme.devices.TABLET} {
    padding: 65px 105px;
    width: 560px;
    height: 656px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 68px 85px;
    width: 972px;
    height: 388px;
  }
`;
const LeftInnerInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 28px;
  }
`;
const RightInnerInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 32px;
  }
`;

const ApplyPartBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  @media ${({ theme }) => theme.devices.TABLET} {
    gap: 17px;
  }
`;
const PartLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.WHITE_TXT};

  @media ${({ theme }) => theme.devices.TABLET} {
    ${({ theme }) => theme.typographies.BIG_TXT}
  }
`;
const PartBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PartBtn = styled.button`
  width: 74px;
  height: 26px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.WHITE_TXT};
  transition: all 0.2s ease-in-out;
  background-color: ${({ theme, $select }) =>
    $select ? theme.colors.MAIN_PINK : theme.colors.CARD_BG};

  @media ${({ theme }) => theme.devices.TABLET} {
    width: 116px;
    height: 42px;
    font-size: 14px;
  }
  @media ${({ theme }) => theme.devices.DESKTOP} {
    width: 130px;
    ${({ theme }) => theme.typographies.DEFAULT_TXT}
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.CARD_BG};
  margin: auto 0;
  display: block;
  @media ${({ theme }) => theme.devices.DESKTOP} {
    display: none;
  }
`;

export default InfoInputBox;
