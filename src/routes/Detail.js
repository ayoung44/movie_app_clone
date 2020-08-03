import React, { Component } from 'react';

// movie-detail -> url을 쳐서 입력해서 들어가면 home으로 가게 설정 
class Detail extends Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;

        if (location.state) {
            return (
                <div style={{ color: 'blue' }}>
                    <span>{location.state.title}</span>
    
                </div>
            );

        } else {
            return null;
        }

    }

}

export default Detail;
