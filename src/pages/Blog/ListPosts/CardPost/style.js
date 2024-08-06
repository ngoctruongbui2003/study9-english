import styled from '@emotion/styled'

export const WrapperCard = styled.div({
    display: 'flex',
    gap: 25,
    marginBottom: '16px',
    padding: '16px',
    maxWidth: '1000px',
    border: '2px solid transparent',
    borderBottomColor: '#dedede',
    borderRadius: '16px',
    transition: 'all .3s ease-in-out'
})

export const WrapperBlogTopicText = styled.span({
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '20px',
    fontFamily: 'Poppins-SVN,sans-serif',
    lineHeight: '26px',
})

export const WrapperAuthorInfoText = styled.div({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '1.25rem',
    pb: '.25rem'
})